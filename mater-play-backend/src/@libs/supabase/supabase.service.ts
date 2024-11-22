import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { error } from "console";
import { buffer } from "stream/consumers";

@Injectable()
export class SupabaseService{
    constructor(
        @Inject('SUPABASE_CLIENT')
        private readonly supabase: SupabaseClient,) {}

    async upload(file: any): Promise<any> {
        const { originalname, buffer} = file;

        const {data, error} = await this.supabase.storage
            .from('mater-play')
            .upload(`movies/${Date.now()}_${originalname}`, buffer, {
                upsert: true
            });
        
        if(error) throw error;

        return data;
    }
}