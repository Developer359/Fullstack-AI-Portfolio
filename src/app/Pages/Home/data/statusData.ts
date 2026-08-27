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
    statusOpenToWork: "Siap Bekerja",
    statusBuildingCoolStuff: "Sedang Membuat Hal Keren"
  }
};
