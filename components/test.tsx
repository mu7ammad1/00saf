"use client";

import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "@heroui/button";

import { createClient } from "@/utils/supabase/client";

export default function Test({ targetUserId }: { targetUserId: string }) {
  const supabase = createClient();
  const [credit, setCredit] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // تحميل بيانات المستخدم المحدد
  useEffect(() => {
    if (!targetUserId) return;

    const fetchCredit = async () => {
      setLoading(true); // بدء التحميل
      const { data, error } = await supabase
        .from("credits")
        .select("*")
        .eq("user_id", targetUserId)
        .single();

      if (error) {
        console.error("Fetch error:", error);
      }

      setCredit(data);
      setLoading(false); // انتهاء التحميل
    };

    fetchCredit();
  }, [targetUserId]);

  // الاشتراك في تحديثات المستخدم
  useEffect(() => {
    if (!targetUserId) return;

    const channel = supabase
      .channel("realtime-credits")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "credits",
          filter: `user_id=eq.${targetUserId}`,
        },
        (payload) => {
          if (
            payload.eventType === "UPDATE" ||
            payload.eventType === "INSERT"
          ) {
            setCredit(payload.new);
          } else if (payload.eventType === "DELETE") {
            setCredit(null);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [targetUserId]);

  return (
    <div>
      {loading ? (
        <Loader2Icon className="h-5 w-5 animate-spin text-gray-500" />
      ) : credit ? (
        <Button
          color="primary"
          size="sm"
          startContent={<p className="text-sm">{credit.credit}</p>}
          variant="bordered"
        >
          UPGRADE
        </Button>
      ) : null}
    </div>
  );
}
