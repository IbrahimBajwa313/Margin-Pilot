import mongoose, { Schema } from "mongoose";

const CalculationSchema = new Schema({
    id: String,
    name: String,
    dateCreated: String,
    staffCount: Number,
    gpTarget: Number,
    isActive: Boolean,
}, { _id: false });

const FacilitiesSchema = new Schema({
    size: Number,
    ramps: Number,
    parking: Number,
}, { _id: false });

const BranchSchema = new Schema({
    id: String,
    name: String,
    code: String,
    address: String,
    postcode: String,
    currency: String,
    managerName: String,
    facilities: FacilitiesSchema,
    calculations: [CalculationSchema],
}, { _id: false });

const CompanyUserSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    status: String,
    lastActive: String,
    createdAt: String,
}, { _id: false });

const CompanySchema = new Schema({
    id: String,
    name: String,
    logo: String,
    ownerName: String,
    address: String,
    email: String,
    phone: String,
    website: String,
    multiLocation: Boolean,
    branches: [BranchSchema],
    users: [CompanyUserSchema],
}, { _id: false });

const PreferencesSchema = new Schema({
    darkMode: Boolean,
    beginnerMode: Boolean,
}, { _id: false });

const UserProfileSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: String,
    jobTitle: String,
    linkedinUrl: String,
    photo: String,
    company: CompanySchema,
    /** When set, this user is a member of another company (the owner's). Role is in owner's company.users. */
    companyOwnerEmail: String,
    preferences: PreferencesSchema,
    hasCompletedSetup: { type: Boolean, default: false },
    createdAt: String,
}, { timestamps: true });

export default mongoose.models.UserProfile || mongoose.model("UserProfile", UserProfileSchema);
