import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Message from './Message'
import { vi } from 'vitest'

const mockHandleSend = vi.fn()
const mockSetOpen = vi.fn()
const mockPostData = vi.fn()

vi.mock('../contexts/MessageContext', () => ({
    useMessage: () => ({
        handleSend: mockHandleSend,
        open: true,
        setOpen: mockSetOpen,
        messages: [],
        historyOpen: false,
        setHistoryOpen: vi.fn(),
    }),
}))

vi.mock('../contexts/LanguageContext', () => ({
    useLanguage: () => ({
        messageTranslations: {
            title: 'Mesaj',
            name: 'İsim',
            email: 'Email',
            message: 'Mesaj',
            send: 'Gönder',
            sending: 'Gönderiliyor',
            close: 'Kapat',
            previous: 'Önceki',
        },
    }),
}))

vi.mock('../hooks/usePostRequest', () => ({
    default: () => ({
        loading: false,
        error: null,
        postData: mockPostData,
    }),
}))

describe('Message Component', () => {

    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('zorunlu alan validation çalışır', async () => {
        render(<Message />)

        fireEvent.click(screen.getByText(/Gönder/i))

        await waitFor(() => {
            expect(screen.getAllByText(/zorunludur/i).length).toBeGreaterThan(0)
        })
    })

    test('form submit edildiğinde handleSend çağrılır', async () => {
        mockPostData.mockImplementation((data, cb) => cb())

        render(<Message />)

        const inputs = screen.getAllByRole('textbox')

        fireEvent.change(inputs[0], {
            target: { value: 'Dilaray' },
        })

        fireEvent.change(inputs[1], {
            target: { value: 'test@mail.com' },
        })

        fireEvent.change(inputs[2], {
            target: { value: 'Merhaba' },
        })

        fireEvent.click(screen.getByText(/Gönder/i))

        await waitFor(() => {
            expect(mockHandleSend).toHaveBeenCalled()
        })
    })

})