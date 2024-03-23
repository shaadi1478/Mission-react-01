import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div>
            <h2>
                <span className='text-7xl'>{price}</span>
                <span className='text-3xl'>{name}</span>
                <span>{features}</span>
                <h1>{price}</h1>
            </h2>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;