import css from './statistics.module.css'

type StatisticsProps = {
   statistics: {
        id: string;
        label: string;
        percentage: number;
    }[];
};

export const Statistics = ({ statistics }: StatisticsProps) => {
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.statList}>
                {statistics.map(({ id, label, percentage }) => (
                    <li key={id} className={css.item} style={{ backgroundColor: getRandomColor() }}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};