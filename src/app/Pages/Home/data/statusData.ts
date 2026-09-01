export interface StatusTranslations {
  statusOpenToWork: string;
  statusBuildingCoolStuff: string;
}

export const statusTranslations: Record<'US' | 'ID', StatusTranslations> = {
  US: {
    statusOpenToWork: "Open to Work",
    statusBuildingCoolStuff: "Building Cool Stuff"
  },
  ID: {
    statusOpenToWork: "Kam Ka Lia Tiyar Hun",
    statusBuildingCoolStuff: "Cool Cheezein Bana Rha Hun"
  }
};
