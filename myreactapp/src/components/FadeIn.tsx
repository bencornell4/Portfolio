import {motion} from 'framer-motion';

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({children, className}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;