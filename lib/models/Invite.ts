import mongoose, { Schema } from "mongoose"

const InviteSchema = new Schema(
  {
    token: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    companyOwnerEmail: { type: String, required: true },
    companyName: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    usedAt: { type: Date, default: null },
  },
  { timestamps: true }
)

// token already has unique index via { unique: true } in schema
InviteSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }) // optional TTL

export default mongoose.models.Invite || mongoose.model("Invite", InviteSchema)
