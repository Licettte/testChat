import {MessageType} from "../../../utils";

export const filteredData = (arrayMessages: MessageType[], startDate: string | number, endDate: string | number) => {
    startDate = new Date(startDate).getTime();
    endDate = new Date(endDate).getTime();
    return arrayMessages.filter(d => {
        let time = new Date(d['data']).getTime();
        return (startDate <= time && time <= endDate)
    });
};
