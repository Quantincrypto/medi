import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Globe, CheckCircle } from 'lucide-react';
import { Listing } from '../data';

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-navy/5 hover:shadow-lg transition-shadow group">
      <Link to={`/equipment/${listing.slug}`} className="relative h-48 block overflow-hidden">
        <img 
          src={listing.image} 
          alt={`${listing.brand} ${listing.model}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 right-2 bg-gold text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          {listing.rating}
        </div>
        <div className="absolute bottom-2 left-2 bg-navy/80 text-white px-2 py-1 rounded text-xs">
          {listing.type}
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/equipment/${listing.slug}`} className="hover:text-teal transition-colors">
            <h3 className="font-bold text-lg leading-tight">
              {listing.brand} {listing.model}
            </h3>
          </Link>
          <span className="text-xs font-semibold text-alert bg-alert/10 px-2 py-1 rounded">
            {listing.refurbishedStandard}
          </span>
        </div>
        
        <div className="space-y-2 mb-4 text-sm text-navy/70">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
            <span className="line-clamp-2">{listing.specs}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal shrink-0" />
            <span>Warranty: {listing.warranty}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-teal shrink-0" />
            <span className="truncate">Compliance: {listing.compliance.join(', ')}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-navy/5">
          <span className="text-xs font-bold uppercase tracking-wider text-navy/50">
            {listing.country}
          </span>
          <Link 
            to={`/equipment/${listing.slug}`}
            className="bg-teal text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal/90 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};
