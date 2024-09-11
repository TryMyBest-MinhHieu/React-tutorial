import React, { useState } from 'react';

const SalaryHistoryTable = ({ onUpdateSalaryHistory }) => {
  const [salaryHistory, setSalaryHistory] = useState([
    { monthYear: '', salaryCode: '', salaryFactor: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedHistory = [...salaryHistory];
    updatedHistory[index][field] = value;
    setSalaryHistory(updatedHistory);
  };

  const addRow = () => {
    setSalaryHistory([...salaryHistory, { monthYear: '', salaryCode: '', salaryFactor: '' }]);
  };

  const handleBlur = () => {
      onUpdateSalaryHistory(salaryHistory);
    };
 

  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Tháng/năm</th>
            <th>Mã ngạch/bậc</th>
            <th>Hệ số lương</th>
          </tr>
        </thead>
        <tbody>
            {salaryHistory.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={item.monthYear}
                    onChange={(e) => handleChange(index, 'monthYear', e.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.salaryCode}
                    onChange={(e) => handleChange(index, 'salaryCode', e.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.salaryFactor}
                    onChange={(e) => handleChange(index, 'salaryFactor', e.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button type="button" onClick={addRow}>Thêm hàng</button>
    </div>
  );
};

export default SalaryHistoryTable;
