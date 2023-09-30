interface CreateUriAndNameToFileProps {
  file: string;
  fileName: string;
  fileType: string;
}

interface CreateUriAndNameToFileReturn {
  uri: string;
  name: string;
}

export const createUriAndNameToFile = ({
  file,
  fileName,
  fileType,
}: CreateUriAndNameToFileProps): CreateUriAndNameToFileReturn => {
  const name = fileName.replace(/ /g, "_");
  const uri = `data:text/${fileType};charset-utf8,%FF%BB%BF,${encodeURIComponent(
    file
  )}`;
  return { uri, name };
};

export const downloadFile = (uri: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = uri;
  link.download = `${fileName}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const convertJsonToCsv = (json: Object, header: string[]): string => {
  const csvHeader = header.join(";");
  const jsonToString = JSON.stringify(json);
  const parsedJson = JSON.parse(jsonToString);
  const jsonValues = Object.values(parsedJson);
  const csvBody = jsonValues.map((jsonItem) => jsonItem).join(";");
  const csv = `${csvHeader}\n${csvBody}`;
  return csv;
};
