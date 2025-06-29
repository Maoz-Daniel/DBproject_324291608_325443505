from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from gym_backend.database.models.member import MemberManager
from gym_backend.api.schemas import MemberModel, MemberUpdateModel


router = APIRouter()


class Member(BaseModel):
    person_id: int
    first_name: str
    last_name: str
    date_of_birth: str  
    member_start_date: str
    membership_type: str
    is_active: Optional[bool] = True


@router.get("/", summary="Get all members")
def get_members():
    manager = MemberManager()
    try:
        members = manager.read_members()
        mapped_members = [
            {
                "personid": m[0],
                "firstname": m[1],      
                "lastname": m[2],       
                "dateofbirth": m[3],
                "memberstartdate": m[4],
                "membershiptype": m[5],
                "isactive": m[6]
            }
            for m in members
        ]
        return mapped_members
    finally:
        manager.close()




@router.get("/{person_id}", summary="Get member by ID")
def get_member(person_id: int):
    manager = MemberManager()
    try:
        member = manager.read_members(person_id=person_id)
        if not member:
            raise HTTPException(status_code=404, detail="Member not found")
        return member
    finally:
        manager.close()


from fastapi import HTTPException

@router.post("/", summary="Create a new member")
def create_member(member: MemberModel):
    manager = MemberManager()
    try:
        manager.create_member(
            person_id=member.person_id,
            first_name=member.first_name,
            last_name=member.last_name,
            date_of_birth=member.date_of_birth,
            member_start_date=member.member_start_date,
            membership_type=member.membership_type,
            is_active=member.is_active
        )
        return {"status": "Member created successfully"}

    except Exception as e:
        print(f"❌ Error creating member: {e}")
        if 'duplicate key value violates unique constraint' in str(e):
            raise HTTPException(status_code=409, detail="A member with this ID already exists.")
        else:
            raise HTTPException(status_code=500, detail=str(e))

    finally:
        manager.close()



@router.put("/{person_id}", summary="Update a member")
def update_member(person_id: int, member: MemberUpdateModel):
    manager = MemberManager()
    try:
        manager.update_member(
            person_id,
            first_name=member.first_name,
            last_name=member.last_name,
            date_of_birth=member.date_of_birth,
            member_start_date=member.member_start_date,
            membership_type=member.membership_type,
            is_active=member.is_active
        )
        return {"status": "Member updated successfully"}
    finally:
        manager.close()



# ✔️ מחיקת חבר
@router.delete("/{person_id}", summary="Delete a member")
def delete_member(person_id: int):
    manager = MemberManager()
    try:
        manager.delete_member(person_id)
        return {"status": "Member deleted successfully"}
    finally:
        manager.close()
