import comebackHomeImg from './come-back-home.svg';

function ComebackHouse(props) {
    return (
        <div className="comeback-home">
            <img onClick={() => props.comebackHouse()} src={comebackHomeImg} alt="" />
        </div>
    );
}

export default ComebackHouse;
