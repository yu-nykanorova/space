import './Banner.scss';

export const Banner = ({ className, children }) => {
  
    return (
        <div className={`banner ${className}`}>
            {children}
        </div>
    );

};
