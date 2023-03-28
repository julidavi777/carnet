export interface CommercialOffer {
    id:                           number;
    sequential_number:            string;
    contract_type:                string;
    contract_type_other:          string;
    service_type:                 string;
    service_type_other:           string;
    sector_productivo:            string;
    sector_productivo_other:      string;
    object_description:           string;
    numero:                       string;
    cuantia:                      number;
    location:                     string;
    release_date:                 string;
    delivery_date:                string;
    observations:                 string;
    anexos:                       Anexos;
    created_at:                   string;
    updated_at:                   string;
    commercial_offers_management: CommercialOffersManagement;
}

export interface Anexos {
    server_hash_name: string;
    original_name:    string;
}

export interface CommercialOffersManagement {
    id:                                 number;
    requirements_determination:         string;
    current_status:                     string;
    requirements_verification:          string;
    commercial_offer_id:                number;
    created_at:                         string;
    updated_at:                         string;
    commercial_offers_management_files: CommercialOffersManagementFile[];
}

export interface CommercialOffersManagementFile {
    id:                              number;
    file:                            Anexos;
    status:                          boolean;
    commercial_offers_management_id: number;
    created_at:                      string;
    updated_at:                      string;
}
