export const countryCodes = [
    { code: 61, country: "Australia" },
    { code: 994, country: "Azerbaijan" },
    { code: 32, country: "Belgium" },
    { code: 975, country: "Bhutan" },
    { code: 55, country: "Brazil" },
    { code: 86, country: "China" },
    { code: 20, country: "Egypt" },
    { code: 372, country: "Estonia" },
    { code: 298, country: "Faroe Islands" },
    { code: 358, country: "Finland" },
    { code: 33, country: "France" },
    { code: 49, country: "Germany" },
    { code: 30, country: "Greece" },
    { code: 91, country: "India" },
    { code: 62, country: "Indonesia" },
    { code: 353, country: "Ireland" },
    { code: 972, country: "Israel" },
    { code: 39, country: "Italy" },
    { code: 81, country: "Japan" },
    { code: 254, country: "Kenya" },
    { code: 371, country: "Latvia" },
    { code: 352, country: "Luxembourg" },
    { code: 52, country: "Mexico" },
    { code: 95, country: "Myanmar" },
    { code: 31, country: "Netherlands" },
    { code: 234, country: "Nigeria" },
    { code: 92, country: "Pakistan" },
    { code: 351, country: "Portugal" },
    { code: 974, country: "Qatar" },
    { code: 7, country: "Russia" },
    { code: 44, country: "United Kingdom" },
    { code: 1, country: "United States / Canada" },
    { code: 971, country: "United Arab Emirates (Dubai)" },
    { code: 380, country: "Ukraine" },
    { code: 90, country: "Turkey" },
    { code: 94, country: "Sri Lanka" },
    { code: 65, country: "Singapore" },
    { code: 82, country: "South Korea" },
    { code: 27, country: "South Africa" },
    { code: 34, country: "Spain" },
    { code: 381, country: "Serbia" },
    { code: 66, country: "Thailand" },
    { code: 216, country: "Tunisia" }
];

export default function binarySearch(arr: { code: number, country: string }[], target: number) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle].code === target) {
            return arr[middle].country;
        }

        if (arr[middle].code < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return null;
}
