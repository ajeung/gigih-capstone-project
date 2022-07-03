import { render, screen } from '@testing-library/react'
import Payment from '../pages/Payment/index'
import userEvent from '@testing-library/user-event'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => ({
        navigate: jest.fn().mockImplementation(() => ({}))
    })
}))

describe('testing for Payment document', () => {
    it('should render the text in the Payment document', () => {
        render(<Payment />)
        expect(screen.getByText('Total Pembayaran')).toBeInTheDocument()
        expect(screen.getByText('Rp. 20.000')).toBeInTheDocument()
        expect(screen.getByText('Metode Pembayaran')).toBeInTheDocument()
        expect(screen.getByText('GoPay')).toBeInTheDocument()
    })

    it('should render the button and hovering in the Payment document', async () => {
        render(<Payment />)
        const bayar = screen.getByText('Bayar')
        userEvent.hover(bayar)
        userEvent.unhover(bayar)
    })
})
