export namespace Image {
  const propName = "URL_IMAGEM";

  export function formatter(
    urls: string[] = [],
    _map: unknown = {},
    root: Record<string, string>,
  ) {
    if (urls.length === 1) {
      root[propName] = urls[0];
      return;
    }

    urls.forEach((url, index) => {
      root[`${propName}_${index + 1}`] = url;
    });
  }
}
