type kpiVariant = 'primary' | 'blue' | 'purple' | 'warning' | 'danger';

export interface IKpiCard {
    icon?: string;
    label: string;
    value: string;
    subtext?: string;
    variant?: kpiVariant;
}
