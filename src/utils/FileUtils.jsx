const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) {
        return `${sizeInBytes} B`;
    } else if (sizeInBytes < 1048576) {
        return `${(sizeInBytes / 1024).toFixed(1)} KB`;
    } else if (sizeInBytes < 1073741824) {
        return `${(sizeInBytes / 1048576).toFixed(1)} MB`;
    } else {
        return `${(sizeInBytes / 1073741824).toFixed(1)} GB`;
    }
};

const shortenFileName = (fileName, maxLength = 10) => {
    const fileParts = fileName.split('.');
    const fileExtension = fileParts.pop();
    const baseName = fileParts.join('.');

    if (baseName.length > maxLength) {
        return baseName.slice(0, maxLength) + '...' + '.' + fileExtension;
    }

    return fileName;
};


const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    link.click();
};


export {
    formatFileSize,
    shortenFileName,
    handleDownload
}