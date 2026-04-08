import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
import { vi } from 'vitest'

let darkModeState = false
let languageState = 'en'

const setDarkModeMock = vi.fn((val) => {
    darkModeState = val
})

const toggleLanguageMock = vi.fn(() => {
    languageState = languageState === 'en' ? 'tr' : 'en'
})

vi.mock('../contexts/MessageContext', () => ({
    useMessage: () => ({
        open: false,
        setOpen: vi.fn(),
        messages: [], // 🔥 kritik
        historyOpen: false,
        setHistoryOpen: vi.fn(),
        handleSend: vi.fn(),
    }),
}))

vi.mock('../contexts/DarkModeContext', () => ({
    useDarkMode: () => ({
        darkMode: darkModeState,
        setDarkMode: setDarkModeMock,
    }),
}))

vi.mock('../contexts/LanguageContext', () => ({
    useLanguage: () => ({
        headerTranslations:
            languageState === 'en'
                ? {
                    darkMode: 'DARK MODE',
                    lightMode: 'LIGHT MODE',
                    language: 'TÜRKÇE',
                    greeting: 'Hi!',
                    description: 'Hello world',
                    current: 'Currently',
                    freelance: 'Freelancing',
                    for: 'for',
                    design: 'Design',
                    project: 'Project',
                    invite: 'Invite me',
                }
                : {
                    darkMode: 'KARANLIK MOD',
                    lightMode: 'AYDINLIK MOD',
                    language: 'ENGLISH',
                    greeting: 'Merhaba!',
                    description: 'Merhaba dünya',
                    current: 'Şu anda',
                    freelance: 'Freelance',
                    for: 'için',
                    design: 'Tasarım',
                    project: 'Proje',
                    invite: 'Beni davet et',
                },

        messageTranslations: {
            title: 'Message',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send',
            close: 'Close',
            previous: 'Previous',
        },

        toggleLanguage: toggleLanguageMock,
    }),
}))

describe('Header Component', () => {

    beforeEach(() => {
        darkModeState = false
        languageState = 'en'
        vi.clearAllMocks()
    })

    test('dark mode toggle çalışır', () => {
        render(<Header />)

        const switchInput = document.querySelector('input[type="checkbox"]')

        fireEvent.click(switchInput)

        expect(setDarkModeMock).toHaveBeenCalled()
    })

    test('dark mode değişince class değişir', () => {
        darkModeState = true

        const { container } = render(<Header />)

        expect(container.firstChild.className).toContain('bg-[#2A262B]')
    })

    test('language toggle çalışır', () => {
        render(<Header />)

        const langBtn = screen.getByText(/TÜRKÇE/i)

        fireEvent.click(langBtn)

        expect(toggleLanguageMock).toHaveBeenCalled()
    })

    test('language değişince text değişir', () => {
        languageState = 'tr'

        render(<Header />)

        const elements = screen.getAllByText(/Merhaba/i)

        expect(elements.length).toBeGreaterThan(0)
    })

})