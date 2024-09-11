import React, { useState } from 'react';

const FamilyRelationshipTable = ({ onUpdateFamilyRelationships }) => {
  const [familyRelationships, setFamilyRelationships] = useState([
    { relationship: '', name: '', birthYear: '', details: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedRelationships = [...familyRelationships];
    updatedRelationships[index][field] = value;
    setFamilyRelationships(updatedRelationships);
  };

  const addRelationship = () => {
    setFamilyRelationships([...familyRelationships, { relationship: '', name: '', birthYear: '', details: '' }]);
  };

  const handleBlur = () => {
    onUpdateFamilyRelationships(familyRelationships);
  };

  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Mối quan hệ</th>
            <th>Họ và tên</th>
            <th>Năm sinh</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {familyRelationships.map((relationship, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={relationship.relationship}
                  onChange={(e) => handleChange(index, 'relationship', e.target.value)}
                  onBlur={handleBlur}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={relationship.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  onBlur={handleBlur}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={relationship.birthYear}
                  onChange={(e) => handleChange(index, 'birthYear', e.target.value)}
                  onBlur={handleBlur}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={relationship.details}
                  onChange={(e) => handleChange(index, 'details', e.target.value)}
                  onBlur={handleBlur}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={addRelationship}>Thêm mối quan hệ</button>
    </div>
  );
};

export default FamilyRelationshipTable;
