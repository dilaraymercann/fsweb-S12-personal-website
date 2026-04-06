import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const usePostRequest = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (data, onSuccess) => {
        setLoading(true);
        try {
            const response = await axios.post(url, data, {
                headers: {
                    'x-api-key': `${import.meta.env.VITE_API_KEY}`,
                }
            });
            setData(response.data);
            toast.success('Mesajınız başarıyla gönderildi!');
            onSuccess && onSuccess();
        } catch (err) {
            setError(err);
            toast.error('Bir hata oluştu, tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, postData };
};

export default usePostRequest;