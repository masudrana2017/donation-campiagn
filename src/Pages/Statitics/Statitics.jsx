import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import useDonationData from '../../Hooks/useDonationData';
import { getDonationToLocalStorage } from '../../utilities/localstorage';

const Statitics = () => {
    const { data: donationData } = useDonationData()
    const localData = getDonationToLocalStorage()
    const localStorageData = localData.length
    const data = [
        { name: 'Donation Data', value: donationData.length },
        { name: 'Available Data', value: donationData.length - localStorageData },
    ];

    const COLORS = ['#0088FE', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div style={{width:"100%", height:"80vh"}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statitics;