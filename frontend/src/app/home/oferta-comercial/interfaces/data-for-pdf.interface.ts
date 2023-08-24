// Generated by https://quicktype.io

export interface DataForPDF {
    control_date:        string;
    managed_proposals:   GeneralDataItem;
    approved_proposals:  GeneralDataItem;
    pending_offers:      GeneralDataItem;
    unexecuted_projects: GeneralDataItem;
}

export interface GeneralDataItem {
    total_offers:              number;
    total_cotizations:         number;
    percentage_offers:         string;
    percentage_cotizations:    string;
    items: Item[];
}

export interface Item {
    item_name:             number;
    sum_cotizations:       number;
    total_offers:          number;
    percentage:            string;
    percentage_cotization: string;
}