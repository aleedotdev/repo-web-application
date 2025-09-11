import Image from "next/image";
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Typography } from "@/components/shared/typography";
import { Country, PhoneFieldProps } from "@/types";
import { Icon } from "@iconify/react";
import useClickOutside from "@/hooks/useOutsideClick";

const InputPhoneField: FC<PhoneFieldProps> = memo(
  ({
    name,
    label,
    value,
    error,
    onBlur,
    onFocus,
    styling,
    required,
    onChange,
    disabled,
    placeholder,
    labelStyles,
    selectedCountryCode = "+1",
    textColor = "text-black",
    ...props
  }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState<Country>({
      name: "United States",
      code: selectedCountryCode,
      flag: "https://flagcdn.com/w320/us.png",
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useClickOutside(
      dropdownRef,
      () => {
        setTimeout(() => setDropdownOpen(false), 100);
      },
      dropdownOpen
    );

    useEffect(() => {
      const fetchCountries = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=name,idd,flags,cca2"
          );

          if (!response.ok) {
            throw new Error("Failed to fetch countries");
          }

          const data = await response.json();

          const formattedCountries: Country[] = data
            .filter(
              (country: any) =>
                country.idd?.root && country.idd?.suffixes?.length > 0
            )
            .map((country: any) => ({
              name: country.name.common,
              code: country.idd.root + (country.idd.suffixes[0] || ""),
              flag: `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`,
            }))
            .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

          setCountries(formattedCountries);

          const defaultCountry = formattedCountries.find(
            (c) => c.code === selectedCountryCode
          );
          if (defaultCountry) {
            setSelectedCountry(defaultCountry);
          }
        } catch (error) {
          console.log("Error fetching countries:", error);
          setCountries([]);
        } finally {
          setLoading(false);
        }
      };

      fetchCountries();
    }, [selectedCountryCode]);

    useEffect(() => {
      if (countries.length > 0 && selectedCountryCode) {
        const country = countries.find((c) => c.code === selectedCountryCode);
        if (country) {
          setSelectedCountry(country);
        }
      }
    }, [selectedCountryCode, countries]);

    const handleSelectCountry = useCallback((country: Country) => {
      setSelectedCountry(country);
      setDropdownOpen(false);
      setSearchTerm("");
    }, []);

    const handlePhoneNumberChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const phoneNumber = e.target.value;
      onChange(selectedCountry.code, phoneNumber);
    };

    const filteredCountries = useMemo(() => {
      const term = searchTerm.trim().toLowerCase();
      if (!term) return countries;

      return countries.filter(
        (country) =>
          country.name.toLowerCase().includes(term) ||
          country.code.toLowerCase().includes(term)
      );
    }, [countries, searchTerm]);

    const handleDropdownToggle = () => {
      setDropdownOpen((prev) => !prev);
    };

    return (
      <div className="flex flex-col gap-2 relative">
      {label && (
        <Typography size="lg" className={`${labelStyles} font-semibold`}>
          {label}
          {required && <span className="text-red">*</span>}
        </Typography>
      )}
      <div className="relative flex flex-row gap-2 sm:gap-2">
        {/* Country Selector Button */}
        <button
          ref={buttonRef}
          type="button"
          className="relative min-h-[58px] flex items-center px-4 py-2 border border-gray rounded-[12px] bg-white cursor-pointer sm:w-32 md:justify-center gap-2"
          onClick={handleDropdownToggle}
          disabled={loading}
        >
        <div className="relative pl-4 sm:w-6 w-1 h-6 flex sm:block hidden  shrink-0">
            {!loading && (
              <Image
                src={selectedCountry.flag}
                alt={`${selectedCountry.name} flag`}
                fill
                className="object-contain min-w-[16px]"
                sizes="12px"
                priority
              />
            )}
          </div>
          <span className="text-center">
            <Typography size="lg" className="truncate">
              {loading ? "..." : selectedCountry.code}
            </Typography>
          </span>
          <Icon icon="bx:chevron-down" className="text-gray" />
        </button>

        {/* Input Field */}
        <input
          {...props}
          type="number"
          name={name}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          onChange={handlePhoneNumberChange}
          placeholder={placeholder}
          className={`px-5 py-4 flex-1 ${textColor} border ${
            error ? "border-red" : "border-gray-300"
          } text-lg placeholder:text-md placeholder:text-dark-gray placeholder:font-medium  disabled:cursor-not-allowed font-medium disabled:bg-gray-100 focus:outline-none rounded-[12px] w-full ${styling}`}
        />
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute z-50 bg-white border border-gray rounded-[12px] shadow-lg w-full xs:w-72 max-h-72 overflow-y-auto flex flex-col gap-1 p-3 top-full mt-2"
          >
            {/* Search Bar */}
            {!loading && (
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search countries..."
                className="w-full px-3 py-2 border border-gray rounded-[12px] text-lg placeholder:text-lg placeholder:font-medium placeholder:text-placeholder-gray focus:outline-none"
              />
            )}

            {/* Loading State */}
            {loading ? (
              <div className="flex justify-center items-center py-4">
                <Typography size="sm">Loading countries...</Typography>
              </div>
            ) : (
              <>
                {/* Country List */}
                {filteredCountries.length === 0 && searchTerm.trim() ? (
                  <div className="flex justify-center items-center py-4">
                    No countries found
                  </div>
                ) : countries.length === 0 ? (
                  <div className="flex justify-center items-center py-4 text-red">
                    Failed to load countries. Please refresh the page.
                  </div>
                ) : (
                  <div className="mt-2 flex flex-col gap-2 text-dark-charcoal overflow-auto py-2 rounded-md">
                    {filteredCountries.map((country, index) => (
                      <div
                        key={`${country.code}-${country.name}-${index}`}
                        className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer ${
                          selectedCountry.name === country.name
                            ? "bg-gray text-dark-charcoal"
                            : "hover:bg-orange hover:text-white"
                        }`}
                        onClick={() => handleSelectCountry(country)}
                      >
                        {/* Remove relative wrapper unless needed for overlays */}
                        <Image
                          src={country.flag}
                          alt={`${country.name} flag`}
                          width={20}
                          height={16}
                          className="object-cover"
                        />
                        <Typography
                          size="sm"
                          className="flex-1 text-sm truncate font-medium"
                        >
                          {country.name}
                        </Typography>
                        <Typography size="sm" className="text-sm">
                          ({country.code})
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
      {/* Error Message */}
      {error && (
        <div className="">
          <Typography size="sm" className="text-red">
            {error}
          </Typography>
        </div>
      )}
    </div>
    );
  }
);

InputPhoneField.displayName = "InputPhoneField";

export default InputPhoneField;
