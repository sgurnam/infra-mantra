import Section from "../UI/Section";

const ReraStates = (props) => {
    return (
        <Section classes="about-rera-states" pageWidth="container">
            <div className="ab-rera-wrap">
                <div className="section-head">
                    <h2>RERA - States</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                </div>
                <div className="ab-rera-table-wrap">
                    <table className="infra-table ab-rera-table">
                        <tbody>
                            <tr>
                                <th>STATE</th>
                                <th>RERA NO.</th>
                            </tr>
                            <tr>
                                <td>Gurgaon</td>
                                <td>REA REG No #F.2(69)AG/RERA/2018/193</td>
                            </tr>
                            <tr>
                                <td>Noida</td>
                                <td>REA REG No #AG/GJ/AHMEDABAD/AHMADABAD CITY/AUDA/AA00022/220822R1</td>
                            </tr>
                            <tr>
                                <td>Pune</td>
                                <td>REA REG No #PRM/KA/RERA/1251/310/AG/171114/000400</td>
                            </tr>
                            <tr>
                                <td>Bangalore</td>
                                <td>REA REG No #PBRERA-OTHER-REA0003</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Section>
    )
}

export default ReraStates;