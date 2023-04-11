import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe('<Button />', () => {

    it('should render a button with the text', () => {

        /*Craindo um mock */
        const fn = jest.fn();
        render(<Button text={'Load More'} onClick={fn}/>);

        const button = screen.getByRole('button', { name: /load more/i });
        fireEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);

    });


    it('should render a button disabled when disabeld is true', () => {

        render(<Button text={'Load More'}  disabled={true}/>);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeDisabled();
    });

    it('should render a button enabled when disabeld is false', () => {

        render(<Button text={'Load More'}  disabled={false}/>);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeEnabled();
    });
    

    // it('should render a button with the text', () => {

    //     render(<Button text={'Load More'} />);
    //     expect.assertions(1);
        
    //     const button = screen.getByRole('button', { name: /load more/i });
    //     expect(button).toBeInTheDocument();
    // });
});