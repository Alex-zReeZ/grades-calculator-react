export const calculateAverage = (gradeArray: Array<number | null>): number | null => {
    if (gradeArray.length > 0) {
        let sum = 0;
        for (let i = 0; i < gradeArray.length; i++) {
            sum += gradeArray[i];
        }
        const average = sum / gradeArray.length;
        return Math.round(average * 2) / 2;
    } else {
        return null;
    }
};