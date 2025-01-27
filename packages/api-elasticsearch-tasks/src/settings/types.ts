import { IElasticsearchIndexingTaskValuesSettings, IIndexSettingsValues } from "~/types";

export interface IIndexManager {
    settings: IElasticsearchIndexingTaskValuesSettings;

    list(): Promise<string[]>;
    disableIndexing(index: string): Promise<IIndexSettingsValues>;
    enableIndexing(index?: string): Promise<void>;
}
