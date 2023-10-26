import { xmlObjectFormatter } from "./formatters";
import { Product } from "./models/product";
import { XMLBuilder } from "./protocols/xml-builder";
import { xmlPropertiesMap } from "./xml-properties-map";
import { XMLBuilder2XMLBuilder } from "./xmlbuilder2-xml-builder";

export class Builder {
  private products: Product[] = [];

  constructor(
    private readonly xmlBuilder: XMLBuilder = new XMLBuilder2XMLBuilder(),
  ) {}

  withProduct(product: Product) {
    this.products.push(product);
    return this;
  }

  buildXml() {
    const xmlData = {
      PRODUTOS: {
        PRODUTO: this.products.map((product) =>
          xmlObjectFormatter(product, xmlPropertiesMap),
        ),
      },
    };

    return this.xmlBuilder.buildXML(xmlData);
  }
}
