
import { render, screen } from '@testing-library/react';
import { PostCard } from './index.jsx';
import { postCardPropsMock } from './mock.js';

const props = postCardPropsMock;

describe('< PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'img/img.png');
        expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});







// O DEBUG SERVE PARA FAZER UM SCREENSHOT DO COMPONENTE RENDERIZADO
// describe('< PostCard />', () => {
//     it('should render PostCard correctly', () => {
//         const { debug } = render(<PostCard {...props} />);

//         debug();
//     });
// });