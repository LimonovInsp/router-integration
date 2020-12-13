export type Clinic = {
    name: string;
    city: string;
    location: string;
    id: string;
}

export interface Clinics {
    clinics: Clinic[];
}
