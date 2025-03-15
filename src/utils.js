export const formatDate = (isoDate) => {
    if (!isoDate) return ""; // Handle empty or undefined values

    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return ""; // Handle invalid dates

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
};
