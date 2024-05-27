export const formatSize = (bytes) => {

    const formatAsMegabytes = (bytes) => {
        const sizeInMB = (bytes / (1000 * 1000)).toFixed(3);
        return `${sizeInMB} MB`;
    };

    const formatAsKilobytes = (bytes) => {
        let sizeInKB;
        if (bytes < 100000) {
            sizeInKB = bytes / 1000;
            return `${sizeInKB.toFixed(2)} kB`;
        } else {
            sizeInKB = Math.round(bytes / 1000);
            return `${sizeInKB} kB`;
        }
    };

    return (bytes < 1000000) ? formatAsKilobytes(bytes) : formatAsMegabytes(bytes);
}
