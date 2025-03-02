import React from 'react';
import Header from '../components/Header';
import { connect } from "react-redux";
import CardContainer from '../components/CardContainer';

interface HomeProps {
    user: string | null;
}

const Home: React.FC<HomeProps> = ({ user }) => {
    return (
        <>
            <Header />
            <div className='container mx-auto p-4'>
                <h1 className='text-3xl font-bold text-center mt-6'>
                    Hi, <span className='text-blue-500'>{user}</span>
                </h1>
                <div className='mt-8'>
                    <CardContainer/>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user, 
    };
};
  
export default connect(mapStateToProps, null)(Home);