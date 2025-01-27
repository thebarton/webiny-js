import { CmsModelField } from "@webiny/api-headless-cms/types";
import camelCase from "lodash/camelCase";

export interface CreateModelFieldParams
    extends Omit<CmsModelField, "id" | "storageId" | "fieldId"> {
    fieldId?: string;
}

export const createModelField = (params: CreateModelFieldParams): CmsModelField => {
    const {
        label,
        fieldId: initialFieldId,
        type,
        tags,
        settings = {},
        listValidation = [],
        validation = [],
        multipleValues = false,
        predefinedValues = {
            values: [],
            enabled: false
        }
    } = params;

    const fieldId = initialFieldId ? camelCase(initialFieldId) : camelCase(label);

    return {
        id: fieldId,
        storageId: `${type}@${fieldId}`,
        fieldId,
        label,
        type,
        settings,
        tags,
        listValidation,
        validation,
        multipleValues,
        predefinedValues
    };
};
