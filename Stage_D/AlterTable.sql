ALTER TABLE member
DROP CONSTRAINT member_membershiptype_check;

UPDATE member SET membershipType = 'Standard'      WHERE membershipType = 'Monthly';
UPDATE member SET membershipType = 'Basic'         WHERE membershipType = 'Daily';
UPDATE member SET membershipType = 'Personalized'  WHERE membershipType = 'Personal Training';
UPDATE member SET membershipType = 'Visitor'       WHERE membershipType = 'Expired';
UPDATE member SET membershipType = 'Premium'       WHERE membershipType = 'Annual';
UPDATE member SET membershipType = 'Extended'      WHERE membershipType = 'Quarterly';


ALTER TABLE member
ADD CONSTRAINT valid_membership_type
CHECK (
    membershipType IN (
        'Basic',
        'Standard',
        'Personalized',
        'Premium',
        'Extended',
        'Visitor'
    )
);
