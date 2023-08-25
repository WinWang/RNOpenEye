export type categoryModel = categoryModelChild[];

export interface categoryModelChild {
    id: number;
    name: string;
    alias?: any;
    description: string;
    bgPicture: string;
    bgColor: string;
    headerImage: string;
    defaultAuthorId: number;
    tagId: number;
}