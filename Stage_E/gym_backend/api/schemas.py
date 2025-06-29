from pydantic import BaseModel, Field
from typing import Optional


class MemberModel(BaseModel):
    person_id: int = Field(..., alias="personid")
    first_name: str = Field(..., alias="firstname")
    last_name: str = Field(..., alias="lastname")
    date_of_birth: str = Field(..., alias="dateofbirth")
    member_start_date: str = Field(..., alias="memberstartdate")
    membership_type: str = Field(..., alias="membershiptype")
    is_active: bool = Field(..., alias="isactive")

    class Config:
        allow_population_by_field_name = True
        orm_mode = True


class MemberUpdateModel(BaseModel):
    first_name: Optional[str] = Field(None, alias="firstname")
    last_name: Optional[str] = Field(None, alias="lastname")
    date_of_birth: Optional[str] = Field(None, alias="dateofbirth")
    member_start_date: Optional[str] = Field(None, alias="memberstartdate")
    membership_type: Optional[str] = Field(None, alias="membershiptype")
    is_active: Optional[bool] = Field(None, alias="isactive")

    class Config:
        allow_population_by_field_name = True
        orm_mode = True
