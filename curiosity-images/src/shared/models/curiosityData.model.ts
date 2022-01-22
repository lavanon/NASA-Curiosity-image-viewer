import { CameraModel } from "./camera.model";
import { RoverModel } from "./rover.model";

export interface CuriosityDataModel {
    id?: number;
    sol?: number;
    camera?: CameraModel[];
    img_src?: string;
    earth_date?: string;
    rover: RoverModel;
};

export interface PhotosModel {
    photos: CuriosityDataModel;
};