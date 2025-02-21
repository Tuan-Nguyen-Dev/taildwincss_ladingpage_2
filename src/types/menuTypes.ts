export type MenuItem = {
  name: string;
  desc: string;
  isNew?: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MegaMenuCategory = {
  title: string;
  sections?: MenuSection[]; // Chỉ có ở `platform`
  items?: MenuItem[]; // Có ở `solutions` và `resources`
};

export type MegaMenuItems = {
  platform: MegaMenuCategory;
  solutions: MegaMenuCategory;
  resources: MegaMenuCategory;
};
