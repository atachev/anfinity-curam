import type { StaticImageData } from "next/image";

export type Brand = {
  image: any;
  link: string;
  name: string;
  alt: string;
};

export type BrandCreate = Omit<Brand, "image"> & {
  image: File | string | StaticImageData;
};

export type BrandUpdate = Partial<BrandCreate>;

export type BrandFilters = {
  search?: string;
  sortBy?: keyof Brand;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
};

export type BrandResponse = {
  data: Brand[];
  total: number;
  page: number;
  limit: number;
};
