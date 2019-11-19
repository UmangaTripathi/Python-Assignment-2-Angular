
//typescript model to represent the products.
export class Products {
    constructor(
      public prod_name: string,
      public price: 'float',
      public src_image: string,
      public brand: string,
      public category: string,
      public ratecount: string,
      public rating: number,
    ) { }
  }