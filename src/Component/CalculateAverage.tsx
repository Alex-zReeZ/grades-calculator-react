export const calculateAverage = (gradeArray: Array<number | null>): number | null => {
    if (gradeArray.length > 0) {
        let sum = 0;
        let count = 0;

        for (let i = 0; i < gradeArray.length; i++) {
            if (gradeArray[i] !== null) {
                sum += gradeArray[i]!;
                count++;
            }
        }

        if (count > 0) {
            const average = sum / count;
            return Math.round(average * 2) / 2;
        } else {
            return null
        }
    } else {
        return null;
    }
};
