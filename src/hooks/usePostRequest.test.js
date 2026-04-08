import { renderHook, act } from '@testing-library/react'
import usePostRequest from '../hooks/usePostRequest'
import { vi } from 'vitest'
import axios from 'axios'
import { toast } from 'react-toastify'

Object.defineProperty(import.meta, 'env', {
    value: {
        VITE_API_KEY: 'test-key',
    },
})

vi.mock('axios')

vi.mock('react-toastify', () => ({
    toast: {
        success: vi.fn(),
        error: vi.fn(),
    },
}))

describe('usePostRequest', () => {

    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('API başarılıysa toast.success çağrılır', async () => {
        axios.post.mockResolvedValue({
            data: { success: true },
        })

        const { result } = renderHook(() =>
            usePostRequest('https://test.com')
        )

        await act(async () => {
            await result.current.postData({ name: 'Test' })
        })

        expect(toast.success).toHaveBeenCalledWith(
            'Mesajınız başarıyla gönderildi!'
        )
    })

    test('API hata verirse toast.error çağrılır', async () => {
        axios.post.mockRejectedValue(new Error('API error'))

        const { result } = renderHook(() =>
            usePostRequest('https://test.com')
        )

        await act(async () => {
            await result.current.postData({ name: 'Test' })
        })

        expect(toast.error).toHaveBeenCalledWith(
            'Bir hata oluştu, tekrar deneyin.'
        )
    })

})