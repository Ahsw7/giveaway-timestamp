class Utils {
    static parseMillsecond(millsecond = 0) {
        const format = (num) => Math.floor(Math.abs(num || 0));
        const second = format((millsecond / 1000) % 60);
        const minutes = format((millsecond / 1000 / 60) % 60);
        const hours = format((millsecond / 1000 / 60 / 60) % 24);
        const days = format((millsecond / 1000 / 60 / 60 / 24) % 7);
        return [
            second.toString().padStart(2, "0"),
            minutes.toString().padStart(2, "0"),
            hours.toString().padStart(2, "0"),
            days.toString(),
        ];
    }
}

export default Utils;
