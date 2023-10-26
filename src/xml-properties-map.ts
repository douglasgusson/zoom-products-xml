import { Image, Price, Product } from "./models";

export type XmlPropertiesMapNode = {
  xmlName?: string;
  xmlFormatter?: (...value: any) => Record<string, string> | string | void;
  allowRepeat?: boolean;
  items?: Record<string, XmlPropertiesMapNode>;
};

export type XmlPropertiesMapNodeItems = XmlPropertiesMapNode["items"];

export const xmlPropertiesMap: Record<keyof Product, XmlPropertiesMapNode> = {
  id: { xmlName: "CODIGO" },
  name: { xmlName: "NOME" },
  description: { xmlName: "DESCRICAO" },
  listingPrice: { xmlName: "PRECO_DE", xmlFormatter: Price.formatter },
  price: { xmlName: "PRECO", xmlFormatter: Price.formatter },
  installmentMonths: { xmlName: "NPARCELA" },
  installmentAmount: { xmlName: "VPARCELA", xmlFormatter: Price.formatter },
  link: { xmlName: "URL" },
  imagesLinks: { xmlFormatter: Image.formatter },
  department: { xmlName: "DEPARTAMENTO" },
  subDepartment: { xmlName: "SUBDEPARTAMENTO" },
  author: { xmlName: "AUTOR" },
  isbn: { xmlName: "ISBN" },
  publisher: { xmlName: "EDITORA" },
  mpc: { xmlName: "MPC" },
  brand: { xmlName: "MARCA" },
  gender: { xmlName: "GENERO" },
  size: { xmlName: "TAMANHO" },
  color: { xmlName: "COR" },
  ean: { xmlName: "EAN" },
  sku: { xmlName: "SKU" },
};
