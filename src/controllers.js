import axios from 'axios';
import 'dotenv/config';

export const reloadRequest = async (req, res) => {
    setTimeout(() => {
        try {
            axios.get(process.env.RELOADER_1_URL);
        }
        catch (error) {
            console.error(error);
        }
    }, process.env.MINUTES * 60 * 1000);
    res.status(200).send();
};
