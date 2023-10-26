import { Builder } from "zoom-products-xml";

const builder = new Builder();

builder
  .withProduct({
    id: "100050",
    name: "Camisa Carolina Rio Dream – Amarelo",
    description:
      "Regata feminina, modelo Carolina, na cor amarela, confeccionada em algodão e da marca Dream, maior varejo feminino do Brasil. Com estampa Rio Eu Te amo.",
    listingPrice: 80,
    price: 70.9,
    installmentMonths: 4,
    installmentAmount: 20,
    link: "http://www.loja.com.br/produtoid=100050",
    imagesLinks: [
      "http://www.loja.com.br/img1",
      "http://www.loja.com.br/img2",
      "http://www.loja.com.br/img3",
      "http://www.loja.com.br/img4",
    ],
    department: "Camisa",
    subDepartment: "Roupa Feminina",
    brand: "Dream",
    color: "Amarelo",
    size: "M",
    gender: "Feminino",
    ean: "3452352356378",
    sku: "fsdagrdgy636378",
  })
  .withProduct({
    id: "100006154",
    name: "Computador PC SpaceBR Dual Core Atom",
    description:
      "Computador PC SpaceBR, Intel® Dual Core Atom 1GB HD 320GB, DVD-RW, Windows 7 + Monitor LCD 21,5 LG Full HD Widescreen - W2243C-PF",
    listingPrice: 1198,
    price: 1198,
    installmentMonths: 12,
    installmentAmount: 99.83,
    link: "http://www.loja.com.br/produtoid=100006154",
    imagesLinks: ["http://www.loja.com.br/imgprodutoid=100006154"],
    department: "Informática",
    subDepartment: "Computadores",
    mpc: "312412",
    ean: "3452352356364",
    sku: "fsdagrdgy636344",
  })
  .withProduct({
    id: "100006155",
    name: "Quem mexeu no meu sanduíche",
    description: "O grande sucesso de vendas",
    listingPrice: 18,
    price: 15,
    installmentMonths: 1,
    installmentAmount: 15,
    link: "http://www.loja.com.br/produtoid=100006155",
    imagesLinks: ["http://www.loja.com.br/imgprodutoid=100006155"],
    department: "Livros",
    subDepartment: "Autoajuda",
    isbn: "5235346",
    publisher: "Martins Fontes",
    author: "Fulano de Tal",
    mpc: "312416",
    ean: "0234235235633",
    sku: "fsdagrdgy21116344",
  });

const xml = builder.buildXml();

console.log(xml);
